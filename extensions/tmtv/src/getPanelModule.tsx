import React from 'react';
import { PanelPetSUV, PanelROIThresholdSegmentation } from './Panels';

// TODO:
// - No loading UI exists yet
// - cancel promises when component is destroyed
// - show errors in UI for thumbnails if promise fails

function getPanelModule({
  commandsManager,
  extensionManager,
  servicesManager,
}) {
  const wrappedPanelPetSuv = () => {
    return (
      <PanelPetSUV
        commandsManager={commandsManager}
        servicesManager={servicesManager}
        extensionManager={extensionManager}
      />
    );
  };

  const wrappedROIThresholdSeg = () => {
    return (
      <PanelROIThresholdSegmentation
        commandsManager={commandsManager}
        servicesManager={servicesManager}
        extensionManager={extensionManager}
      />
    );
  };

  return [
    {
      name: 'petSUV',
      iconName: 'edit-patient',
      iconLabel: 'PET SUV',
      label: 'PET-SUV',
      component: wrappedPanelPetSuv,
    },
    {
      name: 'ROIThresholdSeg',
      iconName: 'create-threshold',
      iconLabel: 'Threshold Seg',
      label: 'Threshold-Seg',
      component: wrappedROIThresholdSeg,
    },
  ];
}

export default getPanelModule;
