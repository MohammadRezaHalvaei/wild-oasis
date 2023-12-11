type CabinDataProps = {
  id?: number;
  created_at?: string;
  description: string;
  discount: number;
  image: string;
  maxCapacity: number;
  name: string;
  regularPrice: number;
};

type BookingDataProps =
  | {
      id: number;
      created_at: string;
      startDate: string;
      endDate: string;
      numNights: number;
      numGuests: number;
      cabinPrice: number;
      extrasPrice: number;
      totalPrice: number;
      status: "unconfirmed" | "checked-in" | "checked-out";
      hasBreakfast: boolean;
      isPaid: boolean;
      observations: string;
      cabinId: number;
      guestId: number;
      cabins: {
        id: number;
        created_at: string;
        name: string;
        maxCapacity: number;
        regularPrice: number;
        discount: number;
        description: string;
        image: string;
      } | null;
      guests: {
        id: number;
        created_at: string;
        fullName: string;
        email: string;
        nationalID: string;
        nationality: string;
        country: string;
        countryFlag: string;
      } | null;
    }
  | undefined;

type ChildrenProps = {
  children: React.ReactNode;
};
