import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description:
        "We believe in building a supportive community where knowledge is shared freely.",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Quality Content",
      description:
        "Our focus is on delivering high-quality, well-researched articles that provide real value.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from user experience to content curation.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description:
        "Our passion for knowledge and learning drives us to create the best blogging experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About BlogApp
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We&apos;re passionate about creating a platform where knowledge meets
            community. BlogApp is more than just a blog – it&apos;s a place where
            ideas flourish and connections are made through the power of
            storytelling.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2024, BlogApp emerged from a simple idea: to create
                  a space where quality content and meaningful conversations
                  could thrive. We noticed the digital landscape was cluttered
                  with noise, and we wanted to build something different.
                </p>
                <p>
                  Our platform combines cutting-edge technology with a
                  human-centered approach to content sharing. We believe that
                  every story matters, and every voice deserves to be heard.
                </p>
                <p>
                  Today, we&apos;re proud to serve a growing community of
                  readers and writers who value depth, authenticity, and
                  meaningful engagement over superficial metrics.
                </p>
              </div>
            </div>
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              width={800}
              height={533}
              className="rounded-lg shadow-xl"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience
              we create for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-blue-100">
            To democratize knowledge sharing by providing a platform that
            connects curious minds with quality content. We&apos;re building the
            future of digital publishing, one story at a time.
          </p>
        </div>
      </section>
    </div>
  );
}
