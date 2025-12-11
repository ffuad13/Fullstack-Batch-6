import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import calculateGrade from "@/utils/calculateGrade";

export default function TernaryComponent({score}) {
	const hasilKalkulasi = calculateGrade(score);

  function TampilanAwal() {
    return (
      <Box className="text-center p-8 bg-gray-50 rounded-lg">
        <Typography variant="h5" className="text-gray-500">
          Click a button below to see your grade!
        </Typography>
      </Box>
    );
  }

  function TampilanFInal() {
    return (
      <Card className="mt-6 shadow-lg">
        <CardContent>
          <Box className="text-center">
            <Typography variant="h2" className="font-bold mb-2">
              {hasilKalkulasi.grade}
            </Typography>
            <Chip label={hasilKalkulasi.status} color={hasilKalkulasi.color} className="mb-4" size="large" />
            <Typography variant="body1" className="mt-4 text-gray-700 ">
              Your Score: {score}
            </Typography>
            <Typography variant="h6" className="mt-4 text-gray-600 ">
              {hasilKalkulasi.message}
              in ternary
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }


	return score === 0 ? <TampilanAwal/> : <TampilanFInal/>
}