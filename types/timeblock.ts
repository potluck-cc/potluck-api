const timeblockFields = `
    day: Day
    startTime: String
    endTime: String
`;

export function generateTimeblock(authorizationType: string) {
  return `
        type timeblock ${authorizationType} {
            ${timeblockFields}
        }
    `;
}

export const timeblock = `
    type timeblock {
        ${timeblockFields}
    }
`;
