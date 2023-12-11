export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          cabinId: number;
          cabinPrice: number;
          created_at: string;
          endDate: string;
          extrasPrice: number;
          guestId: number;
          hasBreakfast: boolean;
          id: number;
          isPaid: boolean;
          numGuests: number;
          numNights: number;
          observations: string;
          startDate: string;
          status: "unconfirmed" | "checked-in" | "checked-out";
          totalPrice: number;
        };
        Insert: {
          cabinId?: number;
          cabinPrice?: number;
          created_at?: string;
          endDate?: string;
          extrasPrice?: number;
          guestId?: number;
          hasBreakfast?: boolean;
          id?: number;
          isPaid?: boolean;
          numGuests?: number;
          numNights?: number;
          observations?: string;
          startDate?: string;
          status?: "unconfirmed" | "checked-in" | "checked-out";
          totalPrice?: number;
        };
        Update: {
          cabinId?: number;
          cabinPrice?: number;
          created_at?: string;
          endDate?: string;
          extrasPrice?: number;
          guestId?: number;
          hasBreakfast?: boolean;
          id?: number;
          isPaid?: boolean;
          numGuests?: number;
          numNights?: number;
          observations?: string;
          startDate?: string;
          status?: "unconfirmed" | "checked-in" | "checked-out";
          totalPrice?: number;
        };
        Relationships: [
          {
            foreignKeyName: "bookings_cabinId_fkey";
            columns: ["cabinId"];
            isOneToOne: false;
            referencedRelation: "cabins";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "bookings_guestId_fkey";
            columns: ["guestId"];
            isOneToOne: false;
            referencedRelation: "guests";
            referencedColumns: ["id"];
          }
        ];
      };
      cabins: {
        Row: {
          created_at: string;
          description: string;
          discount: number;
          id: number;
          image: string;
          maxCapacity: number;
          name: string;
          regularPrice: number;
        };
        Insert: {
          created_at?: string;
          description?: string;
          discount?: number;
          id?: number;
          image?: string;
          maxCapacity?: number;
          name?: string;
          regularPrice?: number;
        };
        Update: {
          created_at?: string;
          description?: string;
          discount?: number;
          id?: number;
          image?: string;
          maxCapacity?: number;
          name?: string;
          regularPrice?: number;
        };
        Relationships: [];
      };
      guests: {
        Row: {
          countryFlag: string;
          created_at: string;
          email: string;
          fullName: string;
          id: number;
          nationalID: string;
          nationality: string;
          country: string;
        };
        Insert: {
          countryFlag?: string;
          created_at?: string;
          email?: string;
          fullName?: string;
          id?: number;
          nationalID?: string;
          nationality?: string;
          country: string;
        };
        Update: {
          countryFlag?: string;
          created_at?: string;
          email?: string;
          fullName?: string;
          id?: number;
          nationalID?: string;
          nationality?: string;
          country: string;
        };
        Relationships: [];
      };
      settings: {
        Row: {
          breakfastPrice: number;
          created_at: string;
          id: number;
          maxBookingLength: number;
          maxGuestsPerBooking: number;
          minBookingLength: number;
        };
        Insert: {
          breakfastPrice?: number;
          created_at?: string;
          id?: number;
          maxBookingLength?: number;
          maxGuestsPerBooking?: number;
          minBookingLength?: number;
        };
        Update: {
          breakfastPrice?: number;
          created_at?: string;
          id?: number;
          maxBookingLength?: number;
          maxGuestsPerBooking?: number;
          minBookingLength?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never;
