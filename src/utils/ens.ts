/**
 * Checks if a domain name is a valid ENS domain.
 * @param ensDomain - The domain name to check.
 * @returns - True if the domain name is valid, false otherwise.
 */
export function isEnsDomain(ensDomain: string): boolean {
  // The regex checks for valid ENS subdomains. Each subdomain part should start with a letter or number,
  // can contain hyphens, and must end with a letter or number. Each subdomain part is separated by a dot.
  const regex = /^[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.eth$/;

  return regex.test(ensDomain);
}

/**
 * Checks if a domain name is a valid DNP name.
 * @param dnpName - The domain name to check.
 * @returns  - True if the domain name is valid, false otherwise.
 */
export function isValidDnpName(dnpName: string): boolean {
  // Regular expression to check for a valid DNP name.
  // It should have only one subdomain before `.dnp.dappnode.eth` or `.public.dappnode.eth`.
  const regex = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.(dnp|public)\.dappnode\.eth$/i;

  return regex.test(dnpName);
}

