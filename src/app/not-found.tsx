import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Layout } from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-center">
          <Card className="w-full max-w-md shadow-xl shadow-red-100/50 border-slate-100">
            <CardContent className="pt-8 pb-8 px-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-8 w-8 text-[#F63049]" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">Page Not Found</h1>
              <p className="text-slate-600">
                The page you are looking for doesn't exist or has been moved.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
