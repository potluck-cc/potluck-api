const geolocationFields = `
    latitude: Float
    longitude: Float
`;

export const geolocation = `
    type Geolocation {
        ${geolocationFields}
    }
`;

export function generateGeolocation(authorizationType: string) {
  return `
    type Geolocation ${authorizationType} {
        ${geolocationFields}
    }
    `;
}
