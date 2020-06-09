import React from 'react';
import {OBJModel, MTLModel} from 'react-3d-viewer'

export const Model = () => {
  return (
    <div className='grid'>
      <div>
      <OBJModel src="./chess.OBJ" 
                width={800}
                height={500}
                position={{x:-10, y: -150, z: 1}}
                rotation={{x: -1.5, y: 0, z: 0}}/>
      </div>
      <div>
      <MTLModel 
        enableZoom = {true}
        position={{x:0, y: -70, z: -30}}
        rotation={{x:0.1, y: 1.5, z: 0}}
        texPath="./model/"
        mtl="./model/bb8.mtl"
        src="./model/bb8.obj"
        width={800}
        height={500}
     />
     </div>
     <div>
     <MTLModel 
        enableZoom = {true}
        position={{x:0, y: -30, z: -30}}
        rotation={{x:0.3, y: 3.15, z: 0}}
        texPath="./spider/"
        mtl="./spider/Only_Spider_with_Animations_Export.mtl"
        src="./spider/Only_Spider_with_Animations_Export.obj"
        width={800}
        height={500}
     />
     </div>
     <div>
    <MTLModel 
        enableZoom = {true}
        position={{x:-200, y: 0, z: 0}}
        rotation={{x:0.4, y: 0.45, z: 0}}
        mtl="./lego/TechnicLEGO_CAR_1.mtl"
        src="./lego/TechnicLEGO_CAR_1.obj"
        width={800}
        height={500}
     />
     </div>
    </div>
  )
}
