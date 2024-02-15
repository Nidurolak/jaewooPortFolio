import { atom } from "recoil";
import uuid from "react-uuid";
import { ButtonDataForRecoil } from "../utils/types";

export const ProjectExplain = atom<string>({
    key: "ProjectExplainState",
    default: "Navis",
})