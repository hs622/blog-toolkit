import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import imagebanner from "../../../public/images/article_01.jpg";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] px-4 text-center"> 
      <p className="leading-7">
        Horizon is a digital publication platform, where you get articles according to
        your interests.
      </p>
    </div>
  );
}

{
  /* <main className="flex-inline items-center justify-center min-h-screen">
<div className="md:container py-5 overflow-hidden">
  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
    <div className="sm:col-span-1 md:col-span-2">
      <div className="relative md:rounded-lg shadow-sm md:shadow-md h-full w-full min-h-[22rem] md:min-h-[32rem] overflow-hidden">
        <Image
          src={imagebanner}
          alt=""
          className="absolute object-fill object-center"
        />

        <<<<
        <div className="container py-5">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-background">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4 bg-black" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" className="bg-black" />
            <div>Docs</div>
            <Separator orientation="vertical" className="bg-black" />
            <div>Source</div>
          </div>
        </div>

        >>>>

      </div>
    </div>

    <div className="col-span-1">
      <Carousel 
        orientation="vertical"
      >
        <CarouselContent>
          <CarouselItem>
            <Card
              className="sm:col-span-2"
              x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="text-balance max-w-lg leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card
              className="sm:col-span-2"
              x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="text-balance max-w-lg leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card
              className="sm:col-span-2"
              x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="text-balance max-w-lg leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card
              className="sm:col-span-2"
              x-chunk="dashboard-05-chunk-0"
            >
              <CardHeader className="pb-3">
                <CardTitle>Your Orders</CardTitle>
                <CardDescription className="text-balance max-w-lg leading-relaxed">
                  Introducing Our Dynamic Orders Dashboard for Seamless
                  Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Order</Button>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>

  <div className="my-5">
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Your Orders</CardTitle>
        <CardDescription className="text-balance max-w-lg leading-relaxed">
          Introducing Our Dynamic Orders Dashboard for Seamless Management
          and Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Create New Order</Button>
      </CardFooter>
    </Card>
  </div>
</div>
</main> */}
