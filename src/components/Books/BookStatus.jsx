const BookStatus = () => {
  const result = (
    <div className="BookStatus">
      <div sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <div size="lg" determinate value="64%">
          64%
        </div>
      </div>
      <div>
        <h3 className="headSpan">
          64% <br />
          <span>Completed</span>
        </h3>
      </div>
    </div>
  );

  return result;
};

export default BookStatus;

// you ca view this link https://mui.com/joy-ui/react-circular-progress/
// import * as React from 'react';
// import Box from '@mui/joy/Box';
// import CircularProgress from '@mui/joy/CircularProgress';
// import ReportIcon from '@mui/icons-material/Report';
// import WarningIcon from '@mui/icons-material/Warning';

// export default function CircularProgressChildren() {
//   return (
//     <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
//       <CircularProgress size="lg" determinate value={66.67}>
//         2 / 3
//       </CircularProgress>
//     </Box>
//   );
// }
