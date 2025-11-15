import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function PropertyCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <Skeleton className="aspect-w-16 aspect-h-9 w-full h-[200px]" />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-6 w-full mt-2" />
        <Skeleton className="h-4 w-3/4 mt-2" />
      </CardContent>
      <CardFooter className="p-4 bg-muted/50 border-t">
        <div className="flex justify-between w-full">
          <Skeleton className="h-5 w-8" />
          <Skeleton className="h-5 w-8" />
          <Skeleton className="h-5 w-12" />
        </div>
      </CardFooter>
    </Card>
  );
}