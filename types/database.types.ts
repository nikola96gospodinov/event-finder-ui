export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          birthday: string
          budget: number
          created_at: string
          distance_threshold_unit: Database["public"]["Enums"]["threshold_unit"]
          distance_threshold_value: number
          gender: Database["public"]["Enums"]["gender"]
          goals: string[]
          id: string
          interests: string[]
          occupation: string
          postcode: string
          relationship_status: Database["public"]["Enums"]["relationship_status"]
          sexual_orientation: Database["public"]["Enums"]["sexual_orientation"]
          user_id: string
          weekday_end_time: string | null
          weekday_start_time: string | null
          weekend_end_time: string | null
          weekend_start_time: string | null
          willingness_for_online: boolean | null
        }
        Insert: {
          birthday: string
          budget: number
          created_at?: string
          distance_threshold_unit: Database["public"]["Enums"]["threshold_unit"]
          distance_threshold_value: number
          gender: Database["public"]["Enums"]["gender"]
          goals: string[]
          id?: string
          interests: string[]
          occupation: string
          postcode: string
          relationship_status: Database["public"]["Enums"]["relationship_status"]
          sexual_orientation: Database["public"]["Enums"]["sexual_orientation"]
          user_id: string
          weekday_end_time?: string | null
          weekday_start_time?: string | null
          weekend_end_time?: string | null
          weekend_start_time?: string | null
          willingness_for_online?: boolean | null
        }
        Update: {
          birthday?: string
          budget?: number
          created_at?: string
          distance_threshold_unit?: Database["public"]["Enums"]["threshold_unit"]
          distance_threshold_value?: number
          gender?: Database["public"]["Enums"]["gender"]
          goals?: string[]
          id?: string
          interests?: string[]
          occupation?: string
          postcode?: string
          relationship_status?: Database["public"]["Enums"]["relationship_status"]
          sexual_orientation?: Database["public"]["Enums"]["sexual_orientation"]
          user_id?: string
          weekday_end_time?: string | null
          weekday_start_time?: string | null
          weekend_end_time?: string | null
          weekend_start_time?: string | null
          willingness_for_online?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      gender: "male" | "female" | "non-binary" | "other"
      relationship_status:
        | "single"
        | "in a relationship"
        | "married"
        | "divorced"
        | "widowed"
        | "polyamorous"
        | "other"
      sexual_orientation:
        | "straight"
        | "lesbian"
        | "gay"
        | "bisexual"
        | "pansexual"
        | "other"
      threshold_unit: "miles" | "km"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      gender: ["male", "female", "non-binary", "other"],
      relationship_status: [
        "single",
        "in a relationship",
        "married",
        "divorced",
        "widowed",
        "polyamorous",
        "other",
      ],
      sexual_orientation: [
        "straight",
        "lesbian",
        "gay",
        "bisexual",
        "pansexual",
        "other",
      ],
      threshold_unit: ["miles", "km"],
    },
  },
} as const
