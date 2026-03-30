import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ConsumptionMethodOptionProps {
  imageUrl: string; 
  imageAlt: string;
  buttonText: string;
}

const ConsumptionMethodOption = ({imageAlt, imageUrl, buttonText}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8 bg-white rounded-2xl">
        <Image src={imageUrl} width={111} height={116} alt={imageAlt}/>
        <Button variant="secondary" className="rounded-sm bg-[--primary] text-[--secondary]">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ConsumptionMethodOption;