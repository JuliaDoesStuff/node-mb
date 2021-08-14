const byte = 0.00000095367431640625;
const kilobyte = byte * 1024;
const megabyte = kilobyte * 1024;
const gigabyte = megabyte * 1024;
const terabyte = gigabyte * 1024;

function mb(value, options = { long: false }) {
	if (typeof value == "string" && value.length > 0 && value.length < 100) {
		let match = /^(-?(?:\d+)?\.?\d+) *(bytes?|b|kilobytes?|kb|megabytes?|mb|gigabytes?|gb|terabytes?|tb)?$/i.exec(value);
		if (match) {
			let num = +match[1];
			switch ((match[2] || "mb").toLowerCase()) {
				case "bytes": case "byte": case "b":
					return num * byte;
				case "kilobytes": case "kilobyte": case "kb":
					return num * kilobyte;
				case "megabytes": case "megabyte": case "mb":
					return num * megabyte;
				case "gigabytes": case "gigabyte": case "gb":
					return num * gigabyte;
				case "terabytes": case "terabyte": case "tb":
					return num * terabyte;
				default:
					return;
			}
		}
	}

	if (typeof value == "number" && isFinite(value)) {
		if (value >= terabyte)
			return Math.round(value / terabyte) + (options.long ? " terabyte" + (value == terabyte ? "" : "s") : "tb");
		if (value >= gigabyte)
			return Math.round(value / gigabyte) + (options.long ? " gigabyte" + (value == gigabyte ? "" : "s") : "gb");
		if (value >= megabyte)
			return Math.round(value / megabyte) + (options.long ? " megabyte" + (value == megabyte ? "" : "s") : "mb");
		if (value >= kilobyte)
			return Math.round(value / kilobyte) + (options.long ? " kilobyte" + (value == kilobyte ? "" : "s") : "kb");
		if (value >= byte)
			return Math.round(value / byte) + (options.long ? " byte" + (value == byte ? "" : "s") : "b");
	}
}

module.exports = mb;