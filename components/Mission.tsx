import {IMission, MissionType} from "../types";
import classNames from "classnames";
import {EB_Garamond} from "next/font/google";
import {
    AssaultIcon,
    CaretDown,
    DownloadIcon,
    ModifyIcon,
    ReconIcon,
    ReligiousIcon,
    SaveIcon,
    SupplyIcon
} from "./icons";
import missionTypes from "../data/missionTypes";
import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {Listbox} from "@headlessui/react";
import useDownloadImage from "../app/hooks/useDownloadImage";

const ebGaramond = EB_Garamond({
    subsets: ['latin'],
    display: 'swap',
})


interface MissionProps {
    mission: IMission
    setMission: Dispatch<SetStateAction<IMission>>
}

function Mission({mission, setMission}: MissionProps) {
    const [isEditing, setIsEditing] = useState(false);

    const prettyRef = useRef<HTMLDivElement>();

    const downloadImage = useDownloadImage(mission.name, prettyRef);

    const toggleIsEditing = () => {
        setIsEditing(!isEditing);
    }

    return <div className="flex justify-center my-4">
        {isEditing ?
            <EditMission mission={mission} setMission={setMission}/> :
            <PrettyMission ref={prettyRef} mission={mission}/>}
        <div className="flex flex-col justify-start gap-y-1 ml-2">
            {!isEditing && <button onClick={toggleIsEditing} className="p-1 border-2 hover:opacity-70">
                <ModifyIcon/> Modifica
            </button>}
            {isEditing && <button onClick={toggleIsEditing} className="p-1 border-2 hover:opacity-70">
                <SaveIcon/> Salva
            </button>}
            {!isEditing && <button onClick={downloadImage} className="p-1 border-2 hover:opacity-70">
                <DownloadIcon/> Salva come immagine
            </button>}
        </div>
    </div>
}

interface PrettyMissionProps {
    mission: IMission
}

const PrettyMission = React.forwardRef<HTMLDivElement, PrettyMissionProps>(({mission}: PrettyMissionProps, ref) => {
    return <div ref={ref} className="bg-stone-100" style={{width: 500}}>
        <div
            className={classNames(ebGaramond.className, "flex", "p-2", "text-slate-50", "bg-black", "uppercase")}>
            <div className="font-bold">{mission.name}</div>
            <div className="grow text-right"><MissionTypeIcon type={mission.type}/> {missionTypes.get(mission.type)}
            </div>
        </div>

        <div className="flex p-2 border-b border-stone-300">
            <div className="basis-1/2"><span className="font-bold">Ricompense:</span> {mission.rewards}</div>
            <div className="basis-1/2"><span className="font-bold">Penalità:</span> {mission.penalties}</div>
        </div>
        <div className="p-2">{mission.description}</div>
        <div className="p-2 border-b">{mission.goal}</div>
        {/*<div className="p-2"><span className="font-bold">GM Notes: </span>{mission.gm_notes}</div>*/}
    </div>
});

interface EditMissionProps {
    mission: IMission
    setMission: Dispatch<SetStateAction<IMission>>
}

export function EditMission({mission, setMission}: EditMissionProps) {
    const onChangeInput = (key: string) => {
        return (e) => {
            let updatedValue = {};
            updatedValue[key] = e.currentTarget.value;

            setMission(mission => ({
                ...mission,
                ...updatedValue
            }));
        }
    }

    const onChangeValue = (key: string) => {
        return (value) => {
            let updatedValue = {};
            updatedValue[key] = value;

            setMission(mission => ({
                ...mission,
                ...updatedValue
            }));
        }
    }

    return <div className="bg-slate-50 shadow" style={{width: 500}}>
        <div
            className={classNames(ebGaramond.className, "flex", "p-2", "text-slate-50", "bg-black", "uppercase")}>
            <div className="font-bold grow">
                <input type="text" className="w-full px-1 bg-black uppercase border-2" value={mission.name}
                       onChange={onChangeInput('name')} placeholder="Mission Name"/>
            </div>
            <div className="text-right pl-2">
                <Listbox value={mission.type} onChange={onChangeValue("type")}>
                    <Listbox.Button className="uppercase"><MissionTypeIcon
                        type={mission.type}/> {missionTypes.get(mission.type)} <CaretDown />
                    </Listbox.Button>
                    <Listbox.Options>
                        {Array.from(missionTypes.keys()).map((type) => (
                            <Listbox.Option
                                key={type}
                                value={type}
                                className="cursor-pointer"
                            >
                                <MissionTypeIcon type={type}/> {missionTypes.get(type)}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>
        </div>

        <div className="flex flex-wrap gap-y-1 p-2 items-center">
            <span className="basis-1/5 font-bold">Ricompense:</span>
            <input type="text"
                   className="basis-4/5 px-1 bg-white border-2"
                   value={mission.rewards}
                   onChange={onChangeInput('rewards')}/>
            <span className="basis-1/5 font-bold">Penalità:</span>
            <input type="text"
                   className="basis-4/5 px-1 bg-white border-2"
                   value={mission.penalties}
                   onChange={onChangeInput('penalties')}/>
        </div>
        <div className="p-2">
            <span className="font-bold">Descrizione:</span>
            <textarea className="px-1 bg-white border-2 w-full" value={mission.description}
                      onChange={onChangeInput('description')}/>
        </div>
        <div className="p-2">
            <span className="font-bold">Obiettivo:</span>
            <textarea className="px-1 bg-white border-2 w-full" value={mission.goal}
                      onChange={onChangeInput('goal')}/>
        </div>
    </div>
}

interface MissionTypeIconProps {
    type: MissionType
}

function MissionTypeIcon({type}: MissionTypeIconProps) {
    switch (type) {
        case MissionType.Assault:
            return <AssaultIcon/>
        case MissionType.Recon:
            return <ReconIcon/>
        case MissionType.Religious:
            return <ReligiousIcon/>
        case MissionType.Supply:
            return <SupplyIcon/>
    }
}


export default Mission