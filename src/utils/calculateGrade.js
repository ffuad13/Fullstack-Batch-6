export default function calculateGrade(score) {
	let grade = ''
	let status = ''
	let message = ''
	let color = ''

	if (score >= 90) {
    grade = "A";
    status = "Excellent";
    message = "Mantap Jiwa";
    color = "success";
  } else if (score >= 80) {
    grade = "B";
    status = "Very Good";
    message = "Good Job";
    color = "info";
  } else if (score >= 70) {
    grade = "C";
    status = "Good Aja";
    message = "Well done";
    color = "primary";
  } else if (score >= 60) {
    grade = "D";
    status = "Lulus doang";
    message = "Lebih giat lagi";
    color = "warning";
  } else {
		grade = "F";
    status = "Gagal";
    message = "Jangan Menyerah";
    color = "error";
	}

  return {grade, status, message, color}
}