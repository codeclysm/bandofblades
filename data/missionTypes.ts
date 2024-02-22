import {MissionType} from "../types";

const missionTypes = new Map<MissionType, string> ([
    [MissionType.Assault, "Assalto"],
    [MissionType.Recon, "Ricognizione"],
    [MissionType.Religious, "Religiosa"],
    [MissionType.Supply, "Approvvigionamento"],
])

export default missionTypes;