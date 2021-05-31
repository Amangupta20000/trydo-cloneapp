import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: 0,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'whitesmoke',
    borderBottom: '1px solid #f61b10',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container col-lg-7 col-7 col-sm-10 mx-auto">
      <h5 className="mt-5 pt-5 fs4" data-aos="fade-down-right" data-aos-duration="1500">Check out our FAQ section to see if we can help.</h5>
            <h1 className="homeHeading text-left mt-3 mb-5" data-aos="fade-down-right" data-aos-duration="1500">Do you have any Question</h1>
            <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" data-aos-duration="1000">
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

          <Typography className="fs-4 mb-3">What is tryDo ? How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails className="light">
          <Typography className="fs-5 ">
          Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!. It works too much faster loading speed and you can works too much comfortability.Trydo create your website so much faster, use to use and Well Documented Codes for your customization.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="fs-4 mb-3">How can I run trydo react template?</Typography>
        </AccordionSummary>
        <AccordionDetails className="light">
          <Typography className="fs-5 ">
          You can run trydo easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node -v and npm -v Version. Goes To Your your command prompt: then First: npm install
        <br/><br/>
          At Last: npm run start. By the following way you can be run your project easily.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="fs-4 mb-3 text-left">How can I change my demo page instead of splash page?</Typography>
        </AccordionSummary>
        <AccordionDetails className="light">
          <Typography className="fs-5 ">
          You can be presenting any home page instead of splash page. http://localhost:3000 you can showing any page as your you are like. First you have to go index.js page then:
          <br/><br/>
          First Step (replace your choose demo page): Example: import Demo form './home/MainDemo' Instead of './home/PortfolioLanding'
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="fs-4 mb-3">How can I get the customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails className="light">
          <Typography className="fs-5 ">
          After purchasing the product need you any support you can be share with us with sending mail to amangupta20000@gmail.com.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="fs-4 mb-3 ">Can I build a complete project with this template?</Typography>
        </AccordionSummary>
        <AccordionDetails className="light">
          <Typography className="fs-5 ">
          Yes, Why not. You can build a project and complete website as you are like. More component are available include in this templete. And you can be use it following documentation.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
