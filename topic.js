const { Kafka } = require("kafkajs");

createTopic();

async function createTopic() {
  try {
    // Admin Stuff..
    const kafka = new Kafka({
      clientId: "kafka_ofbahar",
      brokers: ["68.183.67.198:9092"]
    });

    const admin = kafka.admin();
    console.log("Kafka Broker'a bağlanılıyor...");
    await admin.connect();
    console.log("Kafka Broker'a bağlantı başarılı, Topic üretilecek..");
    await admin.createTopics({
      topics: [
        {
          topic: "Logs",
          numPartitions: 1
        },
        {
          topic: "Logs2",
          numPartitions: 3
        }
      ]
    });
    console.log("Topic Başarılı bir şekilde oluşturulmuştur...");
    await admin.disconnect();
  } catch (error) {
    console.log("Bir Hata Oluştu", error);
  } finally {
    process.exit(0);
  }
}
