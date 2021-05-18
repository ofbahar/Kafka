const { Kafka } = require("kafkajs");

// node consumer.js Logs || Logs2
const ip = process.env.kafka_ip || "127.0.0.1";
const port = process.env.kafka_port || "9092";
const topic_name = process.env.kafka_topic || "Logs";
const clientId = process.env.kafka_clientid || "kafka_ofbahar";

const brokers = [ip+":"+port];
createConsumer();

async function createConsumer() {
  try {

    const kafka = new Kafka({clientId,brokers});

    const consumer = kafka.consumer({
      groupId: "ornek_1_cg_1"
    });

    console.log("Consumer bağlanıyor..");
    await consumer.connect();
    console.log("Bağlantı başarılı.");

    // Consumer Subscribe..
    await consumer.subscribe({
      topic: topic_name,
      fromBeginning: true
    });

    await consumer.run({
      eachMessage: async result => {
        console.log(
          `Gelen Mesaj : ${result.message.value}`
        );
      }
    });
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  }
}
