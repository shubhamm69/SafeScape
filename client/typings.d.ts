interface DisasterData {
  id: string;
  disasterType: string;
  description: string;
  causes: string;
  safetyTips: string[];
  emergencyContacts: {
    id: string;
    type: string;
    number: string;
    disasterId: string;
  }[];
}
