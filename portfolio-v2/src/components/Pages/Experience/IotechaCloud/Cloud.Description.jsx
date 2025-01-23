import cloud from '@/assets/images/projects/IoT.ON.jpg';
import { ProjectImage2 } from '@/common/components/Experience';
import ProjectDescription from '@/common/components/ProjectDescription';

function CloudDescription() {
  return (
    <ProjectDescription>
      <ProjectImage2 src={cloud} alt="IoT.ON™ Cloud Platform" />
      <p>IoT.ON™ is an intelligent software platform providing services that greatly extend the
        capabilities and benefits of IoTecha’s EVSEs, charging modules, and test equipment.
        IoT.ON™ services are available from the cloud or via a combination of cloud and edge
        services hosted by IoTecha’s Edge Kit site controller. IoT.ON™ services scale easily and securely to support
        tens of thousands of devices, located across multiple geographies. The IoT.ON™ Platform can be fully
        customized for fleet operators and charge point operators, including feature set, branding and user
        experience.
      </p>
    </ProjectDescription>
  );
}

export default CloudDescription;
