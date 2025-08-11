"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RunFormData } from "../agent-control-card.component";
import { CustomLocation } from "./custom-location.component";

export const MainFormState = ({
  form,
  isRunning,
  onRunAgent,
}: {
  form: UseFormReturn<RunFormData>;
  isRunning: boolean;
  onRunAgent: () => void;
}) => {
  const { handleSubmit } = form;

  return (
    <Form {...form}>
      <div className="space-y-4">
        <CustomLocation form={form} />

        <FormField
          control={form.control}
          name="onlyHighlyRelevant"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-1 mt-6">
              <div className="flex items-center space-x-3">
                <FormControl>
                  <Checkbox
                    id="highly-relevant"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Only include highly relevant events</FormLabel>
              </div>
            </FormItem>
          )}
        />
      </div>

      <Button
        onClick={handleSubmit(onRunAgent)}
        disabled={isRunning}
        className="text-md md:text-xl shadow-lg"
        size="full"
      >
        <Play className="mr-3 h-6 w-6" />
        Start Event Search
      </Button>
    </Form>
  );
};
