// import the `Kafka` instance from the kafkajs library
const { Kafka } = require("kafkajs")

const ip = process.env.kafka_ip || "127.0.0.1";
const port = process.env.kafka_port || "9092";
const topic_name = process.env.kafka_topic || "Logs";
const clientId = process.env.kafka_clientid || "kafka_ofbahar";
console.log("TOPİK : "+topic_name)
// we can define the list of brokers in the cluster
const brokers = [ip+":"+port]

// initialize a new kafka client and initialize a producer from it
const kafka = new Kafka({ clientId, brokers })
const producer = kafka.producer()

// we define an async function that writes a new message each second
const produce = async () => {
	await producer.connect()
	let i = 0

	// after the produce has connected, we start an interval timer
	setInterval(async () => {
		try {
			// send a message to the configured topic with
			// the key and value formed from the current value of `i`
			await producer.send({
				topic: topic_name,
				messages: [
					{
						key: String(i),
						value: "Bu -" + i + "- numaralı mesaj",
					},
				],
			})

			// if the message is written successfully, log it and increment `i`
			console.log("Gonderilen Mesaj : ", i)
			i++
		} catch (err) {
			console.error("could not write message " + err)
		}
	}, 1000)
}

produce()
