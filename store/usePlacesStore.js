import axios from "axios";
import {create} from "zustand";

export const usePlacesStore = create((set) => ({
  places: [],
  loading: true,
  error: false,

  fetchPlaces: async () => {
    set({ loading: true, error: false });
    try {
      const response = await axios.get(
        "https://69086a582d902d0651b03223.mockapi.io/api/v1/places"
      );
      set({ places: response.data });
    } catch (err) {
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
