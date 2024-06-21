import { useSelector } from "react-redux";
import genres from "./genres";
import { selectGenre } from "../../redux/features/searchFilter/selector";
import { MenuProps } from "antd";
import { useAppDispatch } from "../../redux/store";
import { searchFilterActions } from "../../redux/features/searchFilter";
import { LabeledDropdown } from "../LabeledDropdown";

export function GenreDropdown() {
  const genre = useSelector(selectGenre);
  const dispatch = useAppDispatch();

  const menu: MenuProps = {
    items: genres.map((genre) => ({ label: genre, key: genre })),
    onClick: (event) => dispatch(searchFilterActions.setGenre(event.key)),
    style: { maxHeight: "250px", overflow: "auto" },
  };

  return (
    <LabeledDropdown menu={menu} label="Genre:">
      {genre}
    </LabeledDropdown>
  );
}
