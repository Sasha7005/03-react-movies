import css from "./MovieModal.module.css";
import { useEffect } from "react";
import type { Movie } from "../../types/movie";
import { createPortalm } from "react-dom";

interface MovieModalProps {
  readonly movie: Movie;
  readonly onClose: () => void;
}

export default function MovieModal() {}
