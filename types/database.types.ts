export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
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
          time_commitment_in_minutes: number
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
          time_commitment_in_minutes: number
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
          time_commitment_in_minutes?: number
          user_id?: string
          weekday_end_time?: string | null
          weekday_start_time?: string | null
          weekend_end_time?: string | null
          weekend_start_time?: string | null
          willingness_for_online?: boolean | null
        }
        Relationships: []
      }
      runs: {
        Row: {
          id: number
          run_date: string
          user_id: string
        }
        Insert: {
          id?: number
          run_date?: string
          user_id?: string
        }
        Update: {
          id?: number
          run_date?: string
          user_id?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
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
