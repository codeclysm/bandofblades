'use client'

import {useState} from "react";
import {Crimson_Text} from "next/font/google";

import RollableTable from "./RollableTable";
import classNames from "classnames";
import Mission from "./Mission";
import {IMission, MissionType} from "../types";
import useRandom from "../app/hooks/useRandom";
import {
    favourTypeTable,
    missionAssaultPenaltiesTable,
    missionAssaultRewardsTable,
    missionAssaultTypeTable,
    missionNumberTable,
    missionReconPenaltiesTable,
    missionReconRewardsTable,
    missionReconTypeTable, missionReligiousPenaltiesTable, missionReligiousRewardsTable,
    missionReligiousTypeTable, missionSupplyPenaltiesTable, missionSupplyRewardsTable, missionSupplyTypeTable,
    missionTypeTable,
    specialistTable
} from "../data/tables";
import MissionTypes from "../data/missionTypes";
import {useLocalStorage} from "usehooks-ts";

const crimsonTextReg = Crimson_Text({
    weight: "400",
    preload: false,
})

function MissionGeneration() {
    const missionNumberRows = Array.from(missionNumberTable.values())
    const [missionNumber, setMissionNumber, rollMissionNumber] = useRandom(missionNumberRows.length);

    const missionTypeRows = Array.from(missionTypeTable.values())
    const [missionType, setMissionType, rollMissionType] = useRandom(missionTypeRows.length);

    const favourTypeRows = Array.from(favourTypeTable.values())
    const [favourType, setFavourType, rollFavourType] = useRandom(favourTypeRows.length);

    const specialistRows = Array.from(specialistTable.values())
    const [specialist, setSpecialist, rollSpecialist] = useRandom(specialistRows.length);

    const assaultTypeRows = Array.from(missionAssaultTypeTable.values())
    const [assaultType, setAssaultType, rollAssaultType] = useRandom(assaultTypeRows.length);

    const assaultRewardsRows = Array.from(missionAssaultRewardsTable.values())
    const [assaultRewards, setAssaultRewards, rollAssaultRewards] = useRandom(assaultRewardsRows.length);

    const assaultPenaltiesRows = Array.from(missionAssaultPenaltiesTable.values())
    const [assaultPenalties, setAssaultPenalties, rollAssaultPenalties] = useRandom(assaultPenaltiesRows.length);

    const reconTypeRows = Array.from(missionReconTypeTable.values())
    const [reconType, setReconType, rollReconType] = useRandom(reconTypeRows.length);

    const reconRewardsRows = Array.from(missionReconRewardsTable.values())
    const [reconRewards, setReconRewards, rollReconRewards] = useRandom(reconRewardsRows.length);

    const reconPenaltiesRows = Array.from(missionReconPenaltiesTable.values())
    const [reconPenalties, setReconPenalties, rollReconPenalties] = useRandom(reconPenaltiesRows.length);

    const religiousTypeRows = Array.from(missionReligiousTypeTable.values())
    const [religiousType, setReligiousType, rollReligiousType] = useRandom(religiousTypeRows.length);

    const religiousRewardsRows = Array.from(missionReligiousRewardsTable.values())
    const [religiousRewards, setReligiousRewards, rollReligiousRewards] = useRandom(religiousRewardsRows.length);

    const religiousPenaltiesRows = Array.from(missionReligiousPenaltiesTable.values())
    const [religiousPenalties, setReligiousPenalties, rollReligiousPenalties] = useRandom(religiousPenaltiesRows.length);

    const supplyTypeRows = Array.from(missionSupplyTypeTable.values())
    const [supplyType, setSupplyType, rollSupplyType] = useRandom(supplyTypeRows.length);

    const supplyRewardsRows = Array.from(missionSupplyRewardsTable.values())
    const [supplyRewards, setSupplyRewards, rollSupplyRewards] = useRandom(supplyRewardsRows.length);

    const supplyPenaltiesRows = Array.from(missionSupplyPenaltiesTable.values())
    const [supplyPenalties, setSupplyPenalties, rollSupplyPenalties] = useRandom(supplyPenaltiesRows.length);

    const [mission, setMission] = useLocalStorage<IMission>("mission", {
        description: "Descrizione",
        gm_notes: "",
        goal: "Obiettivo",
        name: "Nome Missione",
        penalties: "Penalità",
        rewards: "Ricompense",
        type: MissionType.Assault
    });

    if (!mission) { return null}

    return <div className={classNames(crimsonTextReg.className, "container", "mx-auto")}>
        <div className="w-full flex justify-center align-top gap-1 mb-3">
            <RollableTable title="Numero di Missioni" rows={missionNumberRows} selected={missionNumber}
                           onRoll={rollMissionNumber}
                           onSelect={setMissionNumber}/>
            <RollableTable title="Tipo di Missione" rows={missionTypeRows} selected={missionType}
                           onRoll={rollMissionType}
                           onSelect={setMissionType}/>
            <RollableTable title="Favore" rows={favourTypeRows} selected={favourType}
                           onRoll={rollFavourType}
                           onSelect={setFavourType}/>
            <RollableTable title="Specialista" rows={specialistRows} selected={specialist}
                           onRoll={rollSpecialist}
                           onSelect={setSpecialist}/>
        </div>

        <hr/>

        <Mission mission={mission} setMission={setMission}/>

        <hr/>

        {mission.type == MissionType.Assault && <div className="w-full flex justify-center align-top gap-1 mt-3">
            <RollableTable title="Assalto - Tipo" rows={assaultTypeRows} selected={assaultType}
                           onRoll={rollAssaultType}
                           onSelect={setAssaultType}/>
            <RollableTable title="Assalto - Ricompense" rows={assaultRewardsRows} selected={assaultRewards}
                           onRoll={rollAssaultRewards}
                           onSelect={setAssaultRewards}/>
            <RollableTable title="Assalto - Penalità" rows={assaultPenaltiesRows} selected={assaultPenalties}
                           onRoll={rollAssaultPenalties}
                           onSelect={setAssaultPenalties}/>
        </div>}

        {mission.type == MissionType.Recon && <div className="w-full flex justify-center align-top gap-1 mt-3">
            <RollableTable title="Ricognizione - Tipo" rows={reconTypeRows} selected={reconType}
                           onRoll={rollReconType}
                           onSelect={setReconType}/>
            <RollableTable title="Ricognizione - Ricompense" rows={reconRewardsRows} selected={reconRewards}
                           onRoll={rollReconRewards}
                           onSelect={setReconRewards}/>
            <RollableTable title="Ricognizione - Penalità" rows={reconPenaltiesRows} selected={reconPenalties}
                           onRoll={rollReconPenalties}
                           onSelect={setReconPenalties}/>
        </div>}

        {mission.type == MissionType.Religious && <div className="w-full flex justify-center align-top gap-1 mt-3">
            <RollableTable title="Religiosa - Tipo" rows={religiousTypeRows} selected={religiousType}
                           onRoll={rollReligiousType}
                           onSelect={setReligiousType}/>
            <RollableTable title="Religiosa - Ricompense" rows={religiousRewardsRows} selected={religiousRewards}
                           onRoll={rollReligiousRewards}
                           onSelect={setReligiousRewards}/>
            <RollableTable title="Religiosa - Penalità" rows={religiousPenaltiesRows} selected={religiousPenalties}
                           onRoll={rollReligiousPenalties}
                           onSelect={setReligiousPenalties}/>
        </div>}

        {mission.type == MissionType.Supply && <div className="w-full flex justify-center align-top gap-1 mt-3">
            <RollableTable title="Approvvigionamento - Tipo" rows={supplyTypeRows} selected={supplyType}
                           onRoll={rollSupplyType}
                           onSelect={setSupplyType}/>
            <RollableTable title="Approvvigionamento - Ricompense" rows={supplyRewardsRows} selected={supplyRewards}
                           onRoll={rollSupplyRewards}
                           onSelect={setSupplyRewards}/>
            <RollableTable title="Approvvigionamento - Penalità" rows={supplyPenaltiesRows} selected={supplyPenalties}
                           onRoll={rollSupplyPenalties}
                           onSelect={setSupplyPenalties}/>
        </div>}
    </div>;
}

export default MissionGeneration