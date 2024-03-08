// Function to distribute sites evenly among electricians
function distributeSites(electricians, sites) {
  const numElectricians = electricians.length;
  const numSites = sites.length;

  // Calculate the average number of sites per electrician
  const avgSitesPerElectrician = Math.floor(numSites / numElectricians);

  // Calculate the number of electricians with one extra site
  const numElectriciansWithExtraSite = numSites % numElectricians;

  // Initialize counters
  let assignedSitesCount = 0;
  let assignedElectriciansCount = 0;

  // Distribute sites among electricians
  electricians.forEach((electrician, index) => {
    const numAssignedSites =
      avgSitesPerElectrician + (index < numElectriciansWithExtraSite ? 1 : 0);
    electrician.assignedSites = sites.slice(
      assignedSitesCount,
      assignedSitesCount + numAssignedSites
    );
    assignedSitesCount += numAssignedSites;
    assignedElectriciansCount++;
  });

  return electricians;
}

module.exports = distributeSites;
