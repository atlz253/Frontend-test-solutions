import { useSelector } from "react-redux";
import { LabeledDropdown } from "../LabeledDropdown";
import { selectPlatform } from "../../redux/features/searchFilter/selector";
import { useAppDispatch } from "../../redux/store";
import { MenuProps } from "antd";
import platforms from "./platforms";
import { searchFilterActions } from "../../redux/features/searchFilter";
import { CSSProperties } from "react";

export function PlatformDropdown({ style }: { style?: CSSProperties }) {
  const platform = useSelector(selectPlatform);
  const dispatch = useAppDispatch();

  const menu: MenuProps = {
    items: platforms.map((platform) => ({ label: platform, key: platform })),
    onClick: (event) => dispatch(searchFilterActions.setPlatform(event.key)),
  };

  return (
    <LabeledDropdown menu={menu} label="Platform:" style={style}>
      {platform}
    </LabeledDropdown>
  );
}
