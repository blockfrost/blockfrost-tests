export default [
  {
    testName: 'genesis',
    endpoints: ['genesis'],
    response: {
      active_slots_coefficient: 0.05,
      update_quorum: 5,
      max_lovelace_supply: '45000000000000000',
      network_magic: 2,
      epoch_length: 86_400,
      system_start: 1_666_656_000,
      slots_per_kes_period: 129_600,
      slot_length: 1,
      max_kes_evolutions: 62,
      security_param: 432,
    },
  },
];
