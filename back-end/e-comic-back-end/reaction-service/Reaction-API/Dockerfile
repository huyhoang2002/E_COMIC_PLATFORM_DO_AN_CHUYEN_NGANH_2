#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["reaction-service/Reaction-API/Reaction-API.csproj", "reaction-service/Reaction-API/"]
COPY ["reaction-service/Reaction-Data/Reaction-Data.csproj", "reaction-service/Reaction-Data/"]
COPY ["comic-service/ComicService.Domain/ComicService.Domain.csproj", "comic-service/ComicService.Domain/"]
COPY ["reaction-service/Reaction-Business/Reaction-Business.csproj", "reaction-service/Reaction-Business/"]
COPY ["event-processor/EventProcessor/EventProcessor.csproj", "event-processor/EventProcessor/"]
RUN dotnet restore "reaction-service/Reaction-API/Reaction-API.csproj"
COPY . .
WORKDIR "/src/reaction-service/Reaction-API"
RUN dotnet build "Reaction-API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Reaction-API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Reaction-API.dll"]