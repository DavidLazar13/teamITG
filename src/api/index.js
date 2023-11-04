// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
// src/api/index.js
export default async function getData() {
  const BASE_URL = 'http://localhost:8080';

  try {
    const response = await fetch(`${BASE_URL}/api/vehicles.json`);
    if (!response.ok) {
      console.error('Error fetching general vehicle data');
      return [];
    }

    const data = await response.json();
    if (!data) return [];

    const vehicleDetailsPromises = data
      .filter((vehicle) => vehicle.apiUrl) // Filter out vehicles without apiUrl
      .map(async (vehicle) => {
        try {
          const detailResponse = await fetch(`${BASE_URL}${vehicle.apiUrl}`);

          // If the fetch was unsuccessful (broken apiUrl), simply return null.
          if (!detailResponse.ok) {
            // console.error(`Failed fetching details for vehicle: ${vehicle.id}. Status: ${detailResponse.status}`);
            return null;
          }

          const detailData = await detailResponse.json();

          // Check if the vehicle has a price, if not, return null.
          if (!detailData || !detailData.price) {
            // console.error(`No price information for vehicle: ${vehicle.id}`);
            return null;
          }

          return {
            ...vehicle,
            ...detailData
          };
        } catch (err) {
          // console.error(`Error fetching details for vehicle: ${vehicle.id}`, err);
          return null;
        }
      });

    const vehicleDetails = await Promise.all(vehicleDetailsPromises);
    return vehicleDetails.filter((detail) => detail !== null); // Filter out any failed or null results
  } catch (err) {
    console.error('Error fetching vehicle data', err);
    return [];
  }
}
