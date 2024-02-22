export enum MissionType {
    Assault = "assault",
    Recon = "recon",
    Religious = "religious",
    Supply = "supply"
}

export interface IMission {
    name: string,
    type: MissionType,
    rewards: string,
    penalties: string,
    description: string,
    goal: string,
    gm_notes: string,
}