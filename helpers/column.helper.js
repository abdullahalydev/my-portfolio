export default function ColumnHelper(column, index, array) {
	if (array.length - 1 === index) {
		return "col";

	} else {
		return `col-12 col-md-6 col-lg-${column}`;
	}
}