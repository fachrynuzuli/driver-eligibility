import { Driver } from '../types/driver';

export const mockDrivers: Driver[] = [
  {
    id: "DRV-1001",
    name: "Fachry Nuzuli",
    email: "fachry@example.com",
    phone: "555-123-4567",
    availableHours: 8,
    weeklyHours: 32,
    lastRestPeriod: "Today, 6:00 AM",
    licenses: [
      { type: "CDL-A", status: "Valid", expiration: "12/15/2025", restrictions: "None" },
      { type: "Hazmat", status: "Valid", expiration: "12/15/2025" }
    ],
    certifications: [
      { name: "HazMat Training", isValid: true, expiration: "05/20/2025" },
      { name: "Defensive Driving", isValid: true, expiration: "08/15/2024" }
    ],
    skillLevel: 3,
    notes: "Preferred for long-haul routes. Has excellent safety record."
  },
  {
    id: "DRV-1002",
    name: "Vincent Khuang",
    email: "kokovin@example.com",
    phone: "555-987-6543",
    availableHours: 10,
    weeklyHours: 28,
    lastRestPeriod: "Yesterday, 10:00 PM",
    licenses: [
      { type: "CDL-A", status: "Valid", expiration: "03/22/2026" },
      { type: "Tanker", status: "Valid", expiration: "03/22/2026" }
    ],
    certifications: [
      { name: "OSHA", isValid: true, expiration: "11/30/2024" },
      { name: "First Aid", isValid: true, expiration: "01/15/2025" }
    ],
    skillLevel: 2
  },
  {
    id: "DRV-1003",
    name: "Cahyadi",
    email: "yc@example.com",
    phone: "555-456-7890",
    availableHours: 0,
    weeklyHours: 60,
    lastRestPeriod: "2 days ago, 8:00 AM",
    licenses: [
      { type: "CDL-B", status: "Valid", expiration: "07/10/2024" }
    ],
    certifications: [
      { name: "Forklift", isValid: true, expiration: "09/28/2024" },
      { name: "Defensive Driving", isValid: false, expiration: "02/15/2023" }
    ],
    skillLevel: 2,
    notes: "Currently at maximum hours, needs mandatory rest."
  },
  {
    id: "DRV-1004",
    name: "Suhandri Daulay",
    email: "suha.ndri@example.com",
    phone: "555-234-5678",
    availableHours: 11,
    weeklyHours: 35,
    lastRestPeriod: "Today, 4:00 AM",
    licenses: [
      { type: "CDL-A", status: "Valid", expiration: "05/18/2025" },
      { type: "Doubles/Triples", status: "Valid", expiration: "05/18/2025" }
    ],
    certifications: [
      { name: "HazMat Training", isValid: true, expiration: "12/01/2024" },
      { name: "OSHA", isValid: true, expiration: "08/30/2025" }
    ],
    skillLevel: 3
  },
  {
    id: "DRV-1005",
    name: "Hafas A",
    email: "Ahafas@example.com",
    phone: "555-876-5432",
    availableHours: 5,
    weeklyHours: 45,
    lastRestPeriod: "Yesterday, 2:00 PM",
    licenses: [
      { type: "CDL-B", status: "Valid", expiration: "09/30/2024" }
    ],
    certifications: [
      { name: "First Aid", isValid: true, expiration: "06/15/2024" },
      { name: "Defensive Driving", isValid: true, expiration: "11/22/2024" }
    ],
    skillLevel: 1
  },
  {
    id: "DRV-1006",
    name: "Jeruk Purut",
    email: "d.purut@example.com",
    phone: "555-345-6789",
    availableHours: 3,
    weeklyHours: 52,
    lastRestPeriod: "Today, 8:00 AM",
    licenses: [
      { type: "CDL-A", status: "Expired", expiration: "01/15/2023" },
      { type: "Hazmat", status: "Valid", expiration: "06/20/2025" }
    ],
    certifications: [
      { name: "OSHA", isValid: false, expiration: "03/10/2023" },
      { name: "Forklift", isValid: true, expiration: "12/05/2024" }
    ],
    skillLevel: 2,
    notes: "License renewal in progress. Limited to non-CDL routes currently."
  },
  {
    id: "DRV-1007",
    name: "Kerang Rebus",
    email: "o.kerang@example.com",
    phone: "555-765-4321",
    availableHours: 7,
    weeklyHours: 42,
    lastRestPeriod: "Yesterday, 6:00 PM",
    licenses: [
      { type: "CDL-A", status: "Valid", expiration: "11/08/2026" },
      { type: "Tanker", status: "Valid", expiration: "11/08/2026" },
      { type: "Hazmat", status: "Valid", expiration: "11/08/2026" }
    ],
    certifications: [
      { name: "HazMat Training", isValid: true, expiration: "07/25/2025" },
      { name: "First Aid", isValid: true, expiration: "09/18/2024" },
      { name: "Defensive Driving", isValid: true, expiration: "04/30/2025" }
    ],
    skillLevel: 3
  },
  {
    id: "DRV-1008",
    name: "Musang King",
    email: "k.musang@example.com",
    phone: "555-678-9012",
    availableHours: 0,
    weeklyHours: 60,
    lastRestPeriod: "3 days ago, 10:00 PM",
    licenses: [
      { type: "CDL-B", status: "Valid", expiration: "08/14/2024" }
    ],
    certifications: [
      { name: "Forklift", isValid: true, expiration: "02/28/2025" }
    ],
    skillLevel: 1,
    notes: "New hire, still in probationary period. Currently at max hours."
  },
  {
    id: "DRV-1009",
    name: "Lee legoreng",
    email: "goreng.lee@example.com",
    phone: "555-890-1234",
    availableHours: 9,
    weeklyHours: 31,
    lastRestPeriod: "Today, 7:00 AM",
    licenses: [
      { type: "CDL-A", status: "Valid", expiration: "04/02/2025" },
      { type: "Doubles/Triples", status: "Valid", expiration: "04/02/2025" }
    ],
    certifications: [
      { name: "OSHA", isValid: true, expiration: "10/15/2024" },
      { name: "Defensive Driving", isValid: true, expiration: "03/22/2025" }
    ],
    skillLevel: 2
  },
  {
    id: "DRV-1010",
    name: "Michael Zhang",
    email: "m.zhang@example.com",
    phone: "555-321-0987",
    availableHours: 6,
    weeklyHours: 44,
    lastRestPeriod: "Yesterday, 9:00 PM",
    licenses: [
      { type: "CDL-C", status: "Valid", expiration: "10/30/2024" }
    ],
    certifications: [
      { name: "First Aid", isValid: true, expiration: "05/12/2025" }
    ],
    skillLevel: 1
  }
];
