import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 bg-zinc-200 flex items-center">
      <div className="container">
        <h1 className="font-bold text-4xl mb-5 lg:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptate perspiciatis consectetur, facere suscipit nam voluptatem
          labore officiis, laborum dolorum atque magni sed ipsum exercitationem
          quis velit distinctio omnis amet?
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
