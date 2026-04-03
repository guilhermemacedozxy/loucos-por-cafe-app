import { ConsumptionMethod } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ConsumptionMethodOptionProps {
  welcome: string;
  imageUrl: string; 
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({imageAlt, imageUrl, buttonText, option, welcome}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8 bg-white rounded-2xl">
        <Image src={imageUrl} width={111} height={116} alt={imageAlt}/>
        <Button variant="secondary" className="rounded-sm bg-[--primary] text-[--secondary]">
          <Link href={`/${welcome}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ConsumptionMethodOption;