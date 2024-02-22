export const missionNumberTable = new Map<number, string> ([
    [1, "3 Missioni"],
    [2, "3 Missioni"],
    [3, "3 Missioni (una ha +1 Specialista)"],
    [4, "2 Missioni"],
    [5, "3 Missioni (una fa ottenere Favore)"],
    [6, "3 Missioni (una Speciale)"],
])
export const missionTypeTable = new Map<number, string> ([
    [1, "Assalto"],
    [2, "Ricognizione"],
    [3, "Religiosa"],
    [4, "Approvvigionamento"],
    [5, "Focus del Comandante"],
    [6, "A scelta del GM"],
])

export const favourTypeTable = new Map<number, string>([
    [1, "Santità"],
    [2, "Misticismo"],
    [3, "Gloria"],
    [4, "Sapienza"],
    [5, "Misericordia"],
    [6, "Natura"],
])

export const specialistTable = new Map<number, string>([
    [1, "Pesante"],
    [2, "Medico"],
    [3, "Scout"],
    [4, "Cecchino"],
    [5, "Ufficiale"],
    [6, "Alchimista o Misericordioso"],
])

export const missionAssaultTypeTable = new Map<number, string> ([
    [1, "Persone"],
    [2, "La Natura Selvaggia"],
    [3, "Non Morti"],
    [4, "Non Morti"],
    [5, "Non Morti Potenti"],
    [6, "Non Morti Potenti"],
])

export const missionAssaultRewardsTable = new Map<number, string> ([
    [1, "+2 Morale"],
    [2, "+3 Morale"],
    [3, "+4 Morale"],
    [4, "+2 Morale; +1 Approv."],
    [5, "+2 Morale; +1 INTEL"],
    [6, "+2 Morale; -1 Tempo"],
])
export const missionAssaultPenaltiesTable = new Map<number, string> ([
    [1, "+1 Tensione; +1 Tempo"],
    [2, "+1 Tempo"],
    [3, "-1 Approvvigionamenti"],
    [4, "+1 Tensione"],
    [5, "+1 Tensione"],
    [6, "+1 Tensione"],
])
export const missionReconTypeTable = new Map<number, string> ([
    [1, "Ricognizione dell'Area"],
    [2, "Ricognizione del Percorso"],
    [3, "Ricognizione delle Truppe"],
    [4, "Infiltrazione"],
    [5, "Esfiltrazione"],
    [6, "Una a scelta + Pericolo"],
])

export const missionReconRewardsTable = new Map<number, string> ([
    [1, "+2 INTEL"],
    [2, "+2 INTEL"],
    [3, "Risorsa; +1 INTEL"],
    [4, "Risorsa o Truppe; +1 INTEL"],
    [5, "+1 INTEL; -1 Tempo"],
    [6, "+3 INTEL"],
])

export const missionReconPenaltiesTable = new Map<number, string> ([
    [1, "+1 Tempo"],
    [2, "2 Morti"],
    [3, "1 Morto"],
    [4, "+1 Tensione"],
    [5, "+1 Tensione"],
    [6, "Nessuna"],
])

export const missionReligiousTypeTable = new Map<number, string> ([
    [1, "Scorta"],
    [2, "Purificazione"],
    [3, "Difesa"],
    [4, "Scavo"],
    [5, "Una a scelta + Favore"],
    [6, "Una a scelta + Favore"],
])

export const missionReligiousRewardsTable = new Map<number, string> ([
    [1, "-1 Tempo; +2 PE"],
    [2, "+2 Morale; +10 Punti"],
    [3, "+1 INTEL; +2 Morale"],
    [4, "Risorsa Eccellente"],
    [5, "Risorsa Eccezionale"],
    [6, "Specialista"],
])

export const missionReligiousPenaltiesTable = new Map<number, string> ([
    [1, "-1 Morale; +1 Tensione"],
    [2, "+1 Tensione"],
    [3, "+1 Tensione"],
    [4, "-1 Morale"],
    [5, "-1 Morale"],
    [6, "Nessuna"],
])

export const missionSupplyTypeTable = new Map<number, string> ([
    [1, "Raccolta o Commercio"],
    [2, "Raccolta o Commercio"],
    [3, "Recupero Scorte"],
    [4, "Recupero Scorte"],
    [5, "Lavoro Mercenario"],
    [6, "Lavoro Mercenario"],
])

export const missionSupplyRewardsTable = new Map<number, string> ([
    [1, "Risorsa; +1 Approv."],
    [2, "Risorsa: +1 Approv."],
    [3, "+2 Approvvigionamenti"],
    [4, "Risorsa; +2 Approv"],
    [5, "+3 Approvvigionamenti"],
    [6, "+3 Approvvigionamenti"],
])

export const missionSupplyPenaltiesTable = new Map<number, string> ([
    [1, "-1 Morale; -1 Approv."],
    [2, "-1 Approvvigionamenti"],
    [3, "-1 Morale"],
    [4, "-1 Morale"],
    [5, "Nessuna"],
    [6, "Nessuna"],
])
