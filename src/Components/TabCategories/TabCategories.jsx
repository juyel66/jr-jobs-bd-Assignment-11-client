import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobsCard from "../JobsCard/JobsCard";
import PropTypes from 'prop-types';
import { motion, useTransform, useViewportScroll } from "framer-motion"

const TabCategories = ({ jobs }) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [2.0, 0]);
    
  return (
    <Tabs>
      <div className="">
        <h1 
         style={{ scale }}

        className="mt-10 text-2xl font-bold text-center"> Job Categories</h1>
        <div className="flex items-center justify-center mt-5">
          <TabList>
            <Tab>
              <span className="lg:text-xl lg:font-bold ">On Site</span>
            </Tab>
            <Tab>
              <span className="lg:text-xl lg:font-bold">Remote</span>
            </Tab>
            <Tab>
              <span className="lg:text-xl lg:font-bold">Hybrid</span>
            </Tab>
            <Tab>
              <span className="lg:text-xl lg:font-bold">Part-Time</span>
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            {jobs
              .filter((j) => j.jobCategory === "On Site")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            {jobs
              .filter((j) => j.jobCategory === "Remote")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            {jobs
              .filter((j) => j.jobCategory === "Hybrid")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
            {jobs
              .filter((j) => j.jobCategory === "Part-Time")
              .map((job) => (
                <JobsCard key={job._id} job={job}></JobsCard>
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};
TabCategories.propTypes ={
    jobs: PropTypes.node.isRequired
}

export default TabCategories;
