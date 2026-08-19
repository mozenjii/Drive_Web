import type { Client } from '@/lib/types';
import { a1Driving } from './clients/a1-driving-school-bakersfield';
import { bonitaDriving } from './clients/bonita-driving-school';
import { vipDriving } from './clients/vip-driving-school';
import { americanBestCali } from './clients/american-best-cali-driving-school';
import { abDriving } from './clients/ab-driving-school';
import { worldDriving } from './clients/world-driving-school';
import { aCaliforniaDriving } from './clients/a-california-driving-school';
import { bolsaDriving } from './clients/bolsa-driving-school';
import { academicDriving } from './clients/academic-driving-school';
import { allgoodDriving } from './clients/allgood-driving-school';
import { drivingSchoolForYou } from './clients/driving-school-for-you';
import { expressDriving } from './clients/express-driving-school';
import { newportDriving } from './clients/newport-driving-school';
import { sanctifiedDriving } from './clients/sanctified-driving-school';
import { allstateDriving } from './clients/allstate-driving-school';
import { kanorDriving } from './clients/kanor-driving-school';
import { masDriving } from './clients/mas-driving-school';
import { teenDrivingAcademy } from './clients/teen-driving-academy';
import { billsDriving } from './clients/bills-driving-school';
import { easyStreet } from './clients/easy-street-driving-school';
import { norcalDriving } from './clients/norcal-driving-school';
import { turlockDriving } from './clients/turlock-driving-school';
import { dollarDriving } from './clients/dollar-driving-school';
import { handG } from './clients/h-and-g-best-driving-school';
import { learn2Drive } from './clients/learn-2-drive-center';
import { safetyFirst } from './clients/safety-first-driving-school';
import { sanDiegoBay } from './clients/san-diego-bay-driving-school';

/**
 * The campaign roster. Adding a client is: write one file under ./clients,
 * import it, add it here. The build emits every page for every client in the
 * list — one Cloudflare Pages project, one deploy, no per-client config.
 *
 * REMOVING a client removes their preview. That is how the 14-day link expiry
 * promised in OFFERS.md §7 is actually enforced: delete the entry, push.
 */
export const clients: Client[] = [
  safetyFirst,
  dollarDriving,
  learn2Drive,
  sanDiegoBay,
  handG,
  billsDriving,
  turlockDriving,
  norcalDriving,
  easyStreet,
  teenDrivingAcademy,
  masDriving,
  kanorDriving,
  allstateDriving,
  newportDriving,
  expressDriving,
  sanctifiedDriving,
  academicDriving,
  a1Driving,
  drivingSchoolForYou,
  allgoodDriving,

  // Tier A — the second twenty.
  bonitaDriving,
  vipDriving,
  americanBestCali,
  abDriving,
  worldDriving,
  aCaliforniaDriving,
  bolsaDriving,
];

export const clientBySlug = new Map(clients.map((c) => [c.slug, c]));

export function getClient(slug: string): Client | undefined {
  return clientBySlug.get(slug);
}
