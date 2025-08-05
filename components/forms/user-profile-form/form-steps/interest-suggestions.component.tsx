"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Lightbulb } from "lucide-react";
import { findSimilarInterests } from "@/utils/interests-suggestions";
import {
  getPopularInterests,
  getRandomSuggestions,
} from "@/utils/interests-suggestions";

interface InterestSuggestionsProps {
  addInterest: (interest: string) => void;
  interests: string[];
  tempInterest: string;
}

export const InterestSuggestions = ({
  addInterest,
  interests,
  tempInterest,
}: InterestSuggestionsProps) => {
  const suggestions = useMemo(() => {
    const existingInterests = interests ?? [];

    if (tempInterest.trim()) {
      const similarInterests = findSimilarInterests(
        tempInterest,
        existingInterests
      );
      if (similarInterests.length === 0) {
        return getPopularInterests(existingInterests);
      }
      return similarInterests;
    } else if (existingInterests.length === 0) {
      return getPopularInterests(existingInterests);
    } else {
      return getRandomSuggestions(6, existingInterests);
    }
  }, [tempInterest, interests]);

  const suggestionType = useMemo(() => {
    if (tempInterest.trim()) {
      const popularInterests = getPopularInterests(interests);
      const isShowingPopular = suggestions.some((s) =>
        popularInterests.includes(s)
      );

      if (isShowingPopular) {
        return "popular";
      }

      const directRelations = suggestions.filter(
        (s) => suggestions.indexOf(s) < 3
      );
      return directRelations.length > 0 ? "similar" : "category";
    } else if (interests.length === 0) {
      return "popular";
    } else {
      return "category";
    }
  }, [tempInterest, suggestions, interests]);

  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  useEffect(() => {
    if (tempInterest.trim()) {
      setIsLoadingSuggestions(true);
      const timer = setTimeout(() => {
        setIsLoadingSuggestions(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsLoadingSuggestions(false);
    }
  }, [tempInterest]);

  const handleSuggestionClick = (suggestion: string) => {
    addInterest(suggestion);
  };

  if (suggestions.length === 0 && !isLoadingSuggestions) return null;

  return (
    <div className="my-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-purple-600">{getIcon(suggestionType)}</div>
        <div>
          <h4 className="text-sm font-semibold text-purple-800">
            {getTitle(suggestionType)}
          </h4>
          <p className="text-xs text-purple-600">
            {getDescription(suggestionType)}
          </p>
        </div>
      </div>

      {isLoadingSuggestions ? (
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="h-8 w-20 bg-purple-200 rounded-full animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="cursor-pointer bg-white text-purple-700 hover:bg-purple-100 
                         transition-all duration-200 hover:scale-105 border-purple-300
                         hover:border-purple-400 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              + {suggestion}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

const getIcon = (type: "popular" | "similar" | "category") => {
  switch (type) {
    case "popular":
      return <TrendingUp className="h-4 w-4" />;
    case "similar":
      return <Lightbulb className="h-4 w-4" />;
    case "category":
      return <Sparkles className="h-4 w-4" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
};

const getTitle = (type: "popular" | "similar" | "category") => {
  switch (type) {
    case "popular":
      return "Popular interests";
    case "similar":
      return "Similar interests";
    case "category":
      return "Related interests";
    default:
      return "Suggestions";
  }
};

const getDescription = (type: "popular" | "similar" | "category") => {
  switch (type) {
    case "popular":
      return "These are trending right now";
    case "similar":
      return "Based on what you've entered";
    case "category":
      return "From the same category";
    default:
      return "Click to add";
  }
};
