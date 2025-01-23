import embedded from '@/assets/images/projects/Embedded-Software.jpg';
import { ProjectImage2 } from '@/common/components/Experience';
import ProjectDescription from '@/common/components/ProjectDescription';

function EmbDescription() {
  return (
    <ProjectDescription>
      <ProjectImage2 src={embedded} alt="IoT.ON™ Embedded Software" />
      <p>
        IoTecha’s team has deep expertise in the design and implementation of software based
        Media Access Control (MAC) engines, Real Time Operating Systems (RTOS), Embedded Linux
        applications, and Communication Subsystems with a focus on intelligent EV charging
        systems and protocols. Leveraging this expertise, IoTecha offers a full range of
        embedded software development services from custom AC and DC EV charger control systems
        based on IoTecha standard software components, driver development and system integration
        to full turnkey product delivery based on IoTecha standard and custom designed hardware
        modules.
      </p>
    </ProjectDescription>
  );
}

export default EmbDescription;
