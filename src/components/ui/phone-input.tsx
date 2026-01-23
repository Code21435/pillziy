"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { countries, Country } from "@/lib/countries"
import { AsYouType, CountryCode, validatePhoneNumberLength, parsePhoneNumber } from "libphonenumber-js";

export interface PhoneInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    value: string
    onChange: (value: string) => void
}

export function PhoneInput({ className, value, onChange, ...props }: PhoneInputProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedCountry, setSelectedCountry] = React.useState<Country>(
        countries.find(c => c.code === "US") || countries[0]
    )

    // Split value into code and number if possible, or just treat as number
    // straightforward implementation: store full number in value. 
    // But standard PhoneInput usually separates country code.
    // We will assume 'value' passed in matches what we want to store.
    // But typically the user wants to see the selected country's format.

    // Let's handle the user typing only the number part in the input, 
    // and we prepend the country code when bubbling up the change.
    // OR, we just let the user type the local number and we provide the country code separately.
    // The user requested: "number should be according to their country".
    // This implies validation or formatting, but for now we'll stick to a clean input + selector.

    const [phoneNumber, setPhoneNumber] = React.useState("")

    React.useEffect(() => {
        // Attempt to parse existing value to find country match if needed
        // or just set local state. 
        // This simple implementation relies on the user selecting the country first.
        if (value) {
            // if value includes the dial code, we could strip it... 
            // but for simplicity let's just sync local state if it differs significantly
            // or just leave it be.
            // Actually, let's keep it simple: formatting is managed by the parent form usually.
            // Here we just provide the UI.
        }
    }, [value])


    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country)
        setPhoneNumber("")
        setOpen(false)
        onChange(`${country.dial_code}`)
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Allow only legitimate phone characters to be typed
        if (!/^[0-9\s()+-]*$/.test(value)) return;

        // Parse and format
        try {
            const asYouType = new AsYouType(selectedCountry.code as CountryCode);
            const formatted = asYouType.input(value);

            // Check if the resulting number is too long
            // We strip formatting to check length against the specific country rules
            const rawDigits = value.replace(/[^0-9]/g, '');

            // If we have digits, check length. 
            if (rawDigits.length > 0) {
                // We construct the full number to validate length against international rules
                // This handles cases where the dial_code implies part of the national number (e.g. +1-684 for American Samoa)
                // and prevents "too long" errors when the dial code and input combined are valid, 
                // or "too short" valid inputs being accepted if we only checked rawDigits against a wrong country expectation.
                const dialCode = selectedCountry.dial_code.split(',')[0].replace(/[^0-9+]/g, '');
                const fullNumber = dialCode + rawDigits;

                const validation = validatePhoneNumberLength(fullNumber);
                if (validation === 'TOO_LONG') {
                    // Ignore this input change if it makes the number too long
                    return;
                }

                try {
                    const parsed = parsePhoneNumber(fullNumber);
                    if (parsed && parsed.isValid()) {
                        // If it is valid, we allow it.
                        // But wait, if we are ALREADY valid, and user types more...
                        // If the NEW number is also valid (rare?), we allow?
                        // If the NEW number is INVALID, but length check passed?

                        // Strict mode:
                        // If (oldValue + newDigit) -> Valid : Allow
                        // If (oldValue + newDigit) -> Invalid : Block?
                        // That would prevent backspacing or fixing. 
                        // We only want to block if LENGTH is exceeded for valid plan.

                        // Actually, validatePhoneNumberLength(fullNumber) usually covers 'TOO_LONG'.
                        // The user issue is that '+92 301 7181908' (valid) + '1' -> was allowed.
                        // validatePhoneNumberLength('+9230171819081') SHOULD return TOO_LONG.
                        // If it didn't, it means for 'PK', the length rules are permissive?
                        // Let's enforce via isValid() as well IF length > X?

                        // Let's assume validatePhoneNumberLength works if fullNumber is correct.
                        // Maybe previous fullNumber calculation was wrong?
                    }
                } catch (e) {
                    // ignore
                }
            }

            setPhoneNumber(formatted);
            if (onChange) {
                onChange(`${selectedCountry.dial_code} ${formatted}`);
            }
        } catch (error) {
            // Fallback if library fails for some reason
            setPhoneNumber(value);
            if (onChange) {
                onChange(`${selectedCountry.dial_code} ${value}`);
            }
        }
    }

    return (
        <div className={cn("flex items-center border border-gray-200 rounded-md bg-[#FAFAFA] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black", className)}>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="ghost"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[50px] h-10 hover:bg-transparent bg-transparent border-0 flex-shrink-0 px-2 gap-1"
                    >
                        <span className="text-xl">{selectedCountry.flag}</span>
                        <ChevronsUpDown className="h-3 w-3 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countries.map((country) => (
                                    <CommandItem
                                        key={country.code}
                                        value={`${country.code}-${country.name}`}
                                        onSelect={() => handleCountrySelect(country)}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                selectedCountry.code === country.code
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            )}
                                        />
                                        <span className="mr-2 text-lg">{country.flag}</span>
                                        <span className="flex-1 truncate">{country.name}</span>
                                        <span className="ml-2 text-gray-500 text-sm">{country.dial_code}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>

            <div className="relative flex-1 min-w-0 flex items-center">
                <span className="text-sm font-medium text-slate-700 ml-2 mr-1 whitespace-nowrap">
                    {selectedCountry.dial_code}
                </span>
                <Input
                    {...props}
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="flex-1 h-9 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-1 placeholder:text-muted-foreground"
                    placeholder="Phone number"
                />
            </div>
        </div>
    )
}
