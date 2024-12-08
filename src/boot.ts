import { useState, useEffect, useState } from "react";

export const useApplicationLoad = (): {
  loading: boolean;
  error: boolean;
  isLoaded: boolean;
} => {
  return {
    loading: false,
    error: false,
    isLoaded: true,
  };
};
