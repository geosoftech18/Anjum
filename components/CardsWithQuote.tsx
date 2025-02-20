import { Card, CardContent, CardHeader } from "./ui/card";

interface CardsWithQuoteProps {
  CardsWithQuoteData: {
    tag: string;
    quote: string;
    cards: {
      logoPath: string;
      title: string;
      text: string;
    }[];
  };
}

const CardsWithQuote: React.FC<CardsWithQuoteProps> = ({
  CardsWithQuoteData,
}) => {
  return (
    <div className="flex flex-col items-center justify-around px-20 gap-10">
      {/* tag */}
      <div className="text-customOrange">{CardsWithQuoteData.tag}</div>
      {/* Quote */}
      <div className="text-customOrange text-2xl text-center px-20 font-semibold">{CardsWithQuoteData.quote}</div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-10">
        {CardsWithQuoteData.cards.map((item,index)=>(
            <Card key={index} className="col-span-1 bg-bgPeach rounded-xl">
                <CardHeader className="flex flex-row items-center justify-around">
                    <div>logo</div>
                    <div className="text-textGray font-semibold">{item.title}</div>
                </CardHeader>
                <CardContent className="text-textBurgundy">
                    {item.text}
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default CardsWithQuote;
