import { Divider } from "../../atoms/Divider";
import { SolidButton } from "../../atoms/SolidButton";
import { TextUtility } from "../../atoms/TextUtility";
import { usePriceDetails } from "./container/usePriceDetails";

export const PriceDetails = () => {
  const { priceDetails } = usePriceDetails({});

  return (
    <div className="flex flex-col h-full w-full max-w-md rounded-lg bg-sky-50 p-8">
      <TextUtility size="xl" textStyle="bold">
        Price Details
      </TextUtility>
      <Divider />
      <div className="flex flex-col gap-5 py-5">
        {priceDetails?.cart?.map(
          ({
            quantity,
            final_price,
            productTotal,
          }: {
            quantity: number;
            final_price: number;
            productTotal: number;
          }) => (
            <div className="flex justify-between">
              <TextUtility size="lg" textStyle="light">
                {quantity + " X $ " + final_price}
              </TextUtility>
              <TextUtility size="lg" textStyle="light">
                {"$ " + String(productTotal)}
              </TextUtility>
            </div>
          )
        )}
      </div>
      <Divider />
      <div className="flex flex-col gap-5 py-5">
        <div className="flex justify-between">
          <TextUtility size="lg" textStyle="semibold">
            Total Saving
          </TextUtility>
          <TextUtility size="lg" textStyle="semibold" color="green">
            {"-$ " + String(priceDetails.totalSaving)}
          </TextUtility>
        </div>
        <div className="flex justify-between">
          <TextUtility size="lg" textStyle="semibold">
            Delivery Fee
          </TextUtility>
          <TextUtility size="lg" textStyle="semibold">
            {"$ " + String(priceDetails.deliveryFee)}
          </TextUtility>
        </div>
        <div className="flex justify-between">
          <TextUtility size="lg" textStyle="semibold">
            Taxes and Charges 🛈
          </TextUtility>
          <TextUtility size="lg" textStyle="semibold">
            {"$ " + String(priceDetails.taxes)}
          </TextUtility>
        </div>
        <Divider />
        <div className="flex justify-between">
          <TextUtility size="lg" textStyle="bold">
            To Pay
          </TextUtility>
          <TextUtility size="lg" textStyle="bold">
            {"$ " + String(priceDetails?.toPay)}
          </TextUtility>
        </div>
      </div>
      <div>
        <SolidButton clickHandler={() => {}} rounded="both" width="full">
          PLACE ORDER
        </SolidButton>
      </div>
    </div>
  );
};
