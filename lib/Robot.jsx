/**
 * Model Information:
* title:	360 Sphere Robot no glass
* source:	https://sketchfab.com/3d-models/360-sphere-robot-no-glass-c5b68cef43064a0c8840fadf9e6e5ded
* author:	mikeramos (https://sketchfab.com/mikeramos)

Model License:
* license type:	CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
* requirements:	Author must be credited. Commercial use is allowed.

If you use this 3D model in your project be sure to copy paste this credit wherever you share it:
This work is based on "360 Sphere Robot no glass" (https://sketchfab.com/3d-models/360-sphere-robot-no-glass-c5b68cef43064a0c8840fadf9e6e5ded) by mikeramos (https://sketchfab.com/mikeramos) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
 * 
 */
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF("/models/robot/robot.gltf");
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions["sphere body|sphere bodyAction"].play();
	}, [actions]);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group
					name="Sketchfab_model"
					rotation={[-Math.PI / 2, 0, Math.PI / 1.8]}
					scale={0.6}>
					<group
						name="900c78215d8943b3939e71d8f325badffbx"
						rotation={[Math.PI / 2, 0, 0]}>
						<group name="Object_2">
							<group name="RootNode">
								<group
									name="sphere_body"
									position={[0, 0.004, 0]}
									rotation={[-Math.PI / 2, 0, 0]}
									scale={100}>
									<mesh
										name="sphere_body_sphere_color_0"
										geometry={nodes.sphere_body_sphere_color_0.geometry}
										material={materials.sphere_color}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/models/robot/robot.gltf");
