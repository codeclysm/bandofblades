import {MissionType} from "../types";
export enum PlaceKey {
    WesternFront = "western-front",
    Plainsworth = "plainsworth",
    LongRoad = "long-road",
    BarrakMines = "barrak-mines",
    GallowsPass = "gallows-pass",
    SunstriderCamp = "sunstrider-camp",
    DureshForest = "duresh-forest",
    TalgonForest = "talgon-forest",
    Westlake = "westlake",
    Eastlake = "eastlake",
    FortCalisco = "fort-calisco",
    HighRoad = "high-road",
    TheMaw = "the-maw",
    SkydaggerKeep = "skydagger-keep",
}

interface Place {
    name: string,
    missionTypes: MissionType[]
}

const places = new Map<PlaceKey, Place>([
    [PlaceKey.WesternFront, {name: "Fronte Occidentale", missionTypes: [MissionType.Assault, MissionType.Recon]}],
    [PlaceKey.Plainsworth, {
        name: "Pianaricca",
        missionTypes: [MissionType.Assault, MissionType.Recon, MissionType.Religious, MissionType.Supply]
    }],
    [PlaceKey.LongRoad, {name: "La Lunga Via", missionTypes: [MissionType.Assault, MissionType.Recon]}],
]);

export default places